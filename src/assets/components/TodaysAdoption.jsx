import React, { useEffect, useState } from "react";


function TodaysAdoption() {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/dogs/dog/random"
        );
        const data = await response.json();
        
        if (data.success) {
          setDog(data.data);
        } else {
          setError("Failed to fetch today's adoption");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDog();
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
      padding: '40px 20px',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Header with "Today's Adoption" in the right */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{
            color: '#e50914',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(229, 9, 20, 0.5)',
            margin: 0,
            
          }}>
            {dog.name}
          </h1>
          <div style={{
            backgroundColor: '#e50914',
            padding: '8px 20px',
            borderRadius: '4px',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            TODAY'S ADOPTION

          </div>
          
        </div>
        
        {/* Dog Card */}
        <div style={{
          backgroundColor: '#181818',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: ['column', 'row'], 
          minHeight: '500px'
        }}>
          {/* Dog Image */}
          <div style={{
            flex: '1',
            position: 'relative',
            minHeight: '300px'
          }}>
            <img
              src={dog.image.url}
              alt={dog.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '100px',
              background: 'linear-gradient(to top, rgba(20, 20, 20, 0.9), transparent)'
            }}></div>
          </div>
          
          {/* Dog Details */}
          <div style={{
            flex: '1',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h2 style={{
                color: '#fff',
                fontSize: '1.8rem',
                marginTop: '0',
                marginBottom: '20px'
              }}>
                Meet {dog.name}
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '30px'
              }}>
                <div>
                  <h3 style={{
                    color: '#e50914',
                    fontSize: '1rem',
                    marginBottom: '8px'
                  }}>ORIGIN</h3>
                  <p>{dog.origin}</p>
                </div>
                
                <div>
                  <h3 style={{
                    color: '#e50914',
                    fontSize: '1rem',
                    marginBottom: '8px'
                  }}>BREED GROUP</h3>
                  <p>{dog.breed_group}</p>
                </div>
                
                <div>
                  <h3 style={{
                    color: '#e50914',
                    fontSize: '1rem',
                    marginBottom: '8px'
                  }}>LIFESPAN</h3>
                  <p>{dog.life_span}</p>
                </div>
                
                <div>
                  <h3 style={{
                    color: '#e50914',
                    fontSize: '1rem',
                    marginBottom: '8px'
                  }}>SIZE</h3>
                  <p>{dog.height.metric} cm | {dog.weight.metric} kg</p>
                </div>
              </div>
              
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  color: '#e50914',
                  fontSize: '1rem',
                  marginBottom: '8px'
                }}>TEMPERAMENT</h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {dog.temperament.split(', ').map((trait, index) => (
                    <span key={index} style={{
                      backgroundColor: '#333',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 style={{
                  color: '#e50914',
                  fontSize: '1rem',
                  marginBottom: '8px'
                }}>BRED FOR</h3>
                <p>{dog.bred_for}</p>
              </div>
            </div>
            
            <button style={{
              backgroundColor: '#e50914',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#f40612',
                transform: 'scale(1.05)'
              }
            }}>
              ADOPTION INQUIRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysAdoption;