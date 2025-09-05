import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/content.jsx';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const BlogPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pt-28"
    >
      <Helmet>
        <title>Blog | MiBrand Agency</title>
        <meta name="description" content="Stay updated with the latest trends in SEO, digital marketing, and AI automation. Read our expert insights and guides on the MiBrand blog." />
      </Helmet>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            From the <span className="text-gradient">MiBrand Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, strategies, and news from the forefront of digital marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flat-card-container"
            >
              <div className="flat-card glass-effect rounded-2xl overflow-hidden h-full flex flex-col">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-muted-foreground mb-2 space-x-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1.5" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1.5" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 flex-grow">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <Button asChild variant="link" className="p-0 justify-start mt-auto">
                    <Link to={`#`} aria-label={`Read more about ${post.title}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default BlogPage;