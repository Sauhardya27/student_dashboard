// components/SearchBar.tsx
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange, 
  placeholder = "Search" 
}) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-4 w-4" />
      <input
        type="text"
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 bg-gray-100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;