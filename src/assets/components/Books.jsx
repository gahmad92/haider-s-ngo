
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/books?page=1&limit=10"
        );
        const data = await response.json();
        
        if (data.success) {
          setBooks(data.data.data);
        } else {
          setError("Failed to fetch books");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#141414'
      }}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#141414',
        color: '#e50914'
      }}>
        Error: {error}
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#141414',
      minHeight: '100vh',
      padding: '40px 0'
    }}>
      <h1 style={{
        color: '#e50914',
        textAlign: 'center',
        fontSize: '3rem',
        marginBottom: '40px',
        fontWeight: 'bold',
        textShadow: '0 0 10px rgba(229, 9, 20, 0.5)',
        fontFamily:'cursive'
      }}>
        DONATED BOOKS
      </h1>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {books.map((book) => (
          <div 
            key={book.id}
            style={{
              backgroundColor: '#181818',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '30px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
              transform: 'perspective(1000px) rotateX(0)',
              position: 'relative',
              cursor: 'pointer',
              ':hover': {
                transform: 'perspective(1000px) rotateX(5deg) translateY(-10px)',
                boxShadow: '0 15px 30px rgba(229, 9, 20, 0.3)'
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(229, 9, 20, 0.3)';
              
              // Bounce animation
              const bounce = () => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) translateY(-15px)';
                setTimeout(() => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) translateY(-10px)';
                }, 150);
              };
              
              setTimeout(bounce, 100);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              height: '250px'
            }}>
              <div style={{
                flex: '0 0 200px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={book.volumeInfo?.imageLinks?.thumbnail || "https://via.placeholder.com/200x250/181818/FFFFFF?text=No+Image"}
                  alt={book.volumeInfo?.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '40px',
                  background: 'linear-gradient(to top, rgba(229, 9, 20, 0.7), transparent)'
                }}></div>
              </div>
              
              <div style={{
                flex: '1',
                padding: '20px',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{
                    color: '#fff',
                    marginBottom: '10px',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    {book.volumeInfo?.title}
                  </h3>
                  {book.volumeInfo?.subtitle && (
                    <p style={{
                      color: '#aaa',
                      marginBottom: '15px',
                      fontSize: '1rem'
                    }}>
                      {book.volumeInfo.subtitle}
                    </p>
                  )}
                </div>
                
                <div>
                  <p style={{
                    color: '#aaa',
                    marginBottom: '5px',
                    fontSize: '0.9rem'
                  }}>
                    <strong style={{ color: '#e50914' }}>Author:</strong> {book.volumeInfo?.authors?.join(", ") || "Unknown"}
                  </p>
                  <p style={{
                    color: '#aaa',
                    marginBottom: '15px',
                    fontSize: '0.9rem'
                  }}>
                    <strong style={{ color: '#e50914' }}>Published:</strong> {book.volumeInfo?.publishedDate || "N/A"}
                  </p>
                  
                  <a
                    href={book.volumeInfo?.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#e50914',
                      color: '#fff',
                      padding: '8px 20px',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      ':hover': {
                        backgroundColor: '#f40612',
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    View Details 😊✨
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;