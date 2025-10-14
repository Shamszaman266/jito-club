export default function Page() {
  const blogs = [
    {
      id: 1,
      title: "The Story Behind JitoClub",
      image: "/blogCard1.jpg",
      brief: "Discover how JitoClub started and what makes it unique.",
      date: "October 12, 2025",
    },
    {
      id: 2,
      title: "How to Play Bull vs Bear",
      image: "/blogCard2.jpg",
      brief: "Learn the basics of the Bull vs Bear mode and improve your strategy.",
      date: "October 10, 2025",
    },
    {
      id: 3 ,
      title: "How to Play Bull vs Bear",
      image: "/blogCard3.jpg",
      brief: "Learn the basics of the Bull vs Bear mode and improve your strategy.",
      date: "October 10, 2025",
    },

    {
      id: 4,
      title: "How to Play Bull vs Bear",
      image: "/blogCard4.jpg",
      brief: "Learn the basics of the Bull vs Bear mode and improve your strategy.",
      date: "October 10, 2025",
    },

    {
      id: 5,
      title: "How to Play Bull vs Bear",
      image: "/blogCard5.jpg",
      brief: "Learn the basics of the Bull vs Bear mode and improve your strategy.",
      date: "October 10, 2025",
    },

    {
      id: 6,
      title: "How to Play Bull vs Bear",
      image: "/blogCard6.jpg",
      brief: "Learn the basics of the Bull vs Bear mode and improve your strategy.",
      date: "October 10, 2025",
    },
        
  ];

  return (
      <section className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">Our Blog</h1>

      {/* blog grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-sm bg-gray-100 rounded-xl shadow-md overflow-hidden mx-auto"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{blog.brief}</p>
              <p className="text-gray-400 text-xs">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
