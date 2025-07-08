import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, BookOpen, Calendar, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

interface Note {
  id: string;
  title: string;
  content: string;
  category: 'reflection' | 'prayer' | 'study' | 'reminder';
  date: string;
}

const CATEGORIES = {
  reflection: { name: 'Reflexão', icon: MessageSquare, color: 'bg-blue-500' },
  prayer: { name: 'Oração', icon: Calendar, color: 'bg-purple-500' },
  study: { name: 'Estudo', icon: BookOpen, color: 'bg-green-500' },
  reminder: { name: 'Lembrete', icon: Clock, color: 'bg-orange-500' }
} as const;

export const Anotacoes: React.FC = () => {
  const [notes, setNotes] = useState<Database['public']['Tables']['notes']['Row'][]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState<Database['public']['Tables']['notes']['Row'] | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'reflection' as string
  });
  const [filter, setFilter] = useState<string | 'all'>('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Buscar notas do Supabase ao carregar
  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .order('date', { ascending: false });
      if (error) {
        setError('Erro ao carregar anotações.');
      } else if (data) {
        setNotes(data);
        localStorage.setItem('bible-notes', JSON.stringify(data));
      }
      setLoading(false);
    };
    fetchNotes();
  }, []);

  // Salvar notas no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('bible-notes', JSON.stringify(notes));
  }, [notes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) return;
    setLoading(true);
    setError(null);
    if (editingNote) {
      // Atualizar nota existente
      const { data, error } = await supabase
        .from('notes')
        .update({
          title: formData.title,
          content: formData.content,
          category: formData.category,
          date: new Date().toISOString(),
        })
        .eq('id', editingNote.id)
        .select();
      if (error) {
        setError('Erro ao atualizar anotação.');
      } else if (data && data[0]) {
        setNotes(notes.map(note => note.id === editingNote.id ? data[0] : note));
        setEditingNote(null);
        setShowForm(false);
        setFormData({ title: '', content: '', category: 'reflection' });
      }
    } else {
      // Criar nova nota
      const { data, error } = await supabase
        .from('notes')
        .insert({
          title: formData.title,
          content: formData.content,
          category: formData.category,
          date: new Date().toISOString(),
        })
        .select();
      if (error) {
        setError('Erro ao criar anotação.');
      } else if (data && data[0]) {
        setNotes([data[0], ...notes]);
        setShowForm(false);
        setFormData({ title: '', content: '', category: 'reflection' });
      }
    }
    setLoading(false);
  };

  const handleEdit = (note: Database['public']['Tables']['notes']['Row']) => {
    setEditingNote(note);
    setFormData({
      title: note.title,
      content: note.content,
      category: note.category
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta anotação?')) {
      setLoading(true);
      setError(null);
      const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id);
      if (error) {
        setError('Erro ao excluir anotação.');
      } else {
        setNotes(notes.filter(note => note.id !== id));
      }
      setLoading(false);
    }
  };

  const filteredNotes = filter === 'all'
    ? notes
    : notes.filter(note => note.category === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="Anotações" subtitle="Reflexões e lembretes" />
      
      <div className="p-4 space-y-4">
        {loading && (
          <Card className="p-4 text-center text-blue-600">Carregando...</Card>
        )}
        {error && (
          <Card className="p-4 text-center text-red-600">{error}</Card>
        )}
        {/* Add Note Button */}
        {!showForm && (
          <Button 
            onClick={() => setShowForm(true)} 
            className="w-full h-12 text-lg font-medium"
          >
            ✏️ Nova Anotação
          </Button>
        )}

        {/* Note Form */}
        {showForm && (
          <Card className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">
                  {editingNote ? 'Editar Anotação' : 'Nova Anotação'}
                </h3>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setShowForm(false);
                    setEditingNote(null);
                    setFormData({ title: '', content: '', category: 'reflection' });
                  }}
                >
                  Cancelar
                </Button>
              </div>

              <Input
                placeholder="Título da anotação..."
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />

              <div className="grid grid-cols-4 gap-2">
                {Object.entries(CATEGORIES).map(([key, category]) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={key}
                      type="button"
                      variant={formData.category === key ? 'default' : 'outline'}
                      className="h-auto p-2 flex-col gap-1"
                      onClick={() => setFormData({ ...formData, category: key as string })}
                    >
                      <Icon size={16} />
                      <span className="text-xs">{category.name}</span>
                    </Button>
                  );
                })}
              </div>

              <Textarea
                placeholder="Escreva sua anotação aqui..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={4}
                required
              />

              <Button type="submit" className="w-full">
                {editingNote ? 'Salvar Alterações' : 'Salvar Anotação'}
              </Button>
            </form>
          </Card>
        )}

        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            Todas
          </Button>
          {Object.entries(CATEGORIES).map(([key, category]) => (
            <Button
              key={key}
              variant={filter === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(key as string)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Notes List */}
        <div className="space-y-3">
          {filteredNotes.length === 0 ? (
            <Card className="p-8 text-center">
              <MessageSquare size={48} className="mx-auto text-muted-foreground mb-3" />
              <p className="text-muted-foreground">
                {filter === 'all' 
                  ? 'Nenhuma anotação criada ainda' 
                  : `Nenhuma anotação na categoria "${CATEGORIES[filter as string].name}"`
                }
              </p>
            </Card>
          ) : (
            filteredNotes.map((note) => {
              const category = CATEGORIES[note.category as keyof typeof CATEGORIES];
              const Icon = category.icon;
              
              return (
                <Card key={note.id} className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-6 h-6 rounded-full ${category.color} text-white text-xs flex items-center justify-center`}>
                            <Icon size={12} />
                          </div>
                          <h3 className="font-medium">{note.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {note.content}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {category.name}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(note.date)}
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(note)}
                        >
                          Editar
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(note.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          Excluir
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};