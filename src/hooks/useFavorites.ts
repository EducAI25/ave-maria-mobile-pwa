import { useState, useEffect } from 'react';

export interface FavoriteVerse {
  id: string;
  bookId: string;
  bookName: string;
  chapterNumber: number;
  verseNumber: number;
  text: string;
  dateAdded: string;
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteVerse[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('bible-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const addFavorite = (verse: Omit<FavoriteVerse, 'id' | 'dateAdded'>) => {
    const newFavorite: FavoriteVerse = {
      ...verse,
      id: `${verse.bookId}-${verse.chapterNumber}-${verse.verseNumber}`,
      dateAdded: new Date().toISOString()
    };

    const updatedFavorites = [...favorites, newFavorite];
    setFavorites(updatedFavorites);
    localStorage.setItem('bible-favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (favoriteId: string) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== favoriteId);
    setFavorites(updatedFavorites);
    localStorage.setItem('bible-favorites', JSON.stringify(updatedFavorites));
  };

  const toggleFavorite = (verse: Omit<FavoriteVerse, 'id' | 'dateAdded'>) => {
    const favoriteId = `${verse.bookId}-${verse.chapterNumber}-${verse.verseNumber}`;
    const isFavorite = favorites.some(fav => fav.id === favoriteId);

    if (isFavorite) {
      removeFavorite(favoriteId);
    } else {
      addFavorite(verse);
    }
  };

  const isFavorite = (bookId: string, chapterNumber: number, verseNumber: number) => {
    const favoriteId = `${bookId}-${chapterNumber}-${verseNumber}`;
    return favorites.some(fav => fav.id === favoriteId);
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('bible-favorites');
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearAllFavorites
  };
}; 