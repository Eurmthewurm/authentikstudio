import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';

interface VideoTestimonialProps {
  platform: 'youtube' | 'vimeo';
  videoId: string;
  author: string;
  title: string;
}

export const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ platform, videoId, author, title }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchThumbnail = async () => {
      setIsLoading(true);
      try {
        if (platform === 'vimeo') {
          const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`);
          const data = await response.json();
          setThumbnailUrl(data.thumbnail_url_with_play_button.replace(/_295x166/g, ''));
        } else { // YouTube
          setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
        }
      } catch (error) {
        console.error("Failed to fetch video thumbnail:", error);
        setThumbnailUrl(`https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/141411/FBB924?text=Video+by+${author}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchThumbnail();
  }, [platform, videoId, author]);

  const embedUrl = platform === 'vimeo'
    ? `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`
    : `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          className="relative rounded-lg overflow-hidden cursor-pointer group"
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => setIsOpen(true)}
        >
          {isLoading ? (
            <Skeleton className="w-full aspect-video" />
          ) : (
            <img src={thumbnailUrl} alt={`Thumbnail for testimonial by ${author}`} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
          )}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
            <PlayCircle className="w-20 h-20 text-amber-400/80 transition-all duration-300 group-hover:text-amber-400 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="font-medium text-amber-400 text-left">— {author}</p>
              <p className="text-sm text-foreground/80 text-left">{title}</p>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="p-0 border-0 max-w-4xl bg-transparent shadow-none">
        <DialogTitle className="sr-only">Video Testimonial from {author}</DialogTitle>
        <div className="aspect-video">
          {isOpen && (
            <iframe
              src={embedUrl}
              title={`Video Testimonial from ${author}`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              className="w-full h-full rounded-lg"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
