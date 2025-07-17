
import { useEffect, useState } from 'react';

function Hero() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div style={{
      backgroundColor: '#141414',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            color: '#e50914',
            fontSize: '3rem',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(229, 9, 20, 0.5)',
            marginBottom: '10px',
            fontFamily:'cursive'
          }}>
            <strong>NGO's</strong> donated things
          </h1>
          <p style={{
            color: '#ff6361',
            fontSize: '1.2rem',
            margin: 0,
            
          }}>
            let's donate together
          </p>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          padding: '0 20px'
        }}>
          {products.map((product) => (
            <div 
              key={product.id}
              style={{
                backgroundColor: '#181818',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                ':hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 15px 30px rgba(229, 9, 20, 0.3)'
                }
              }}
            >
              <div style={{
                position: 'relative',
                height: '300px',
                overflow: 'hidden'
              }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '80px',
                  background: 'linear-gradient(to top, rgba(20, 20, 20, 0.9), transparent)'
                }}></div>
              </div>
              
              <div style={{
                padding: '20px'
              }}>
                <h3 style={{
                  color: '#fff',
                  fontSize: '1.2rem',
                  marginBottom: '10px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {product.title}
                </h3>
                <p style={{
                  color: '#aaa',
                  marginBottom: '15px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  minHeight: '60px'
                }}>
                  {product.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#e50914',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}>
                   
                  </span>
                  <button style={{
                    backgroundColor: '#e50914',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      backgroundColor: '#f40612',
                      transform: 'scale(1.05)'
                    }
                  }}>
                    Donate Now 😊✨
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;