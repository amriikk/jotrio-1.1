import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import InfiniteGallery from "./ui/infinite-gallery";

// You can swap these out for your own images!
const galleryImages = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  "https://img.youtube.com/vi/FNTyIWkv5k8/maxresdefault.jpg",
  "https://img.youtube.com/vi/o6vbe5G7xNo/maxresdefault.jpg",
  "https://img.youtube.com/vi/--XrIa-iey0/maxresdefault.jpg",
  "https://img.youtube.com/vi/e_SPuvO_l1w/maxresdefault.jpg",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
];

const ImageGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fixed inset-0 z-50 h-screen w-screen bg-neutral-950">
      <Link 
        to="/"
        className="absolute left-8 top-8 z-[60] flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/80 px-4 py-2 text-sm font-medium text-neutral-300 shadow-xl backdrop-blur-md transition-all hover:bg-neutral-800 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Portfolio
      </Link>

      <InfiniteGallery 
        images={galleryImages} 
        className="h-full w-full" 
      />
    </div>
  );
};

export default ImageGallery;