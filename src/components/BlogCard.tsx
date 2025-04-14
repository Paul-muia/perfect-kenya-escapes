
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '@/lib/data';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { title, slug, excerpt, date, readTime, coverImage, category } = post;
  
  return (
    <Link to={`/blog/${slug}`} className="group bg-white rounded-xl overflow-hidden transition-all hover:shadow-lg flex flex-col h-full">
      <div className="relative overflow-hidden">
        <div className="w-full aspect-[16/9] overflow-hidden">
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-luxury-purple text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold font-heading text-luxury-darkPurple mb-2 group-hover:text-luxury-purple transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        
        <div className="flex items-center text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
