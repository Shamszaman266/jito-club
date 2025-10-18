"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch from local WordPress
    fetch("http://localhost/wordpress/wp-json/wp/v2/posts") 
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          brief: post.excerpt.rendered,
          date: new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
          image: post.featured_media_src_url || "/default.jpg",
          link: post.link,
        }));
        setBlogs(formatted);
      })
      .catch((err) => console.log("Error fetching posts:", err));
  }, []);

  return (
    <section className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">Our Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[450px]"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
              <p
                className="text-gray-600 text-sm mb-3 line-clamp-4 flex-1"
                dangerouslySetInnerHTML={{ __html: blog.brief }}
              />
              <p className="text-gray-400 text-xs mt-auto">{blog.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
