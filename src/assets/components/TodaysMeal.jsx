import React, { useEffect, useState } from "react";

function TodaysMeal() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/meals/meal/random"
        );
        const data = await response.json();
        
        if (data.success) {
          setMeal(data.data);
        } else {
          setError("Failed to fetch today's meal");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMeal();
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

// ingredients 
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(`${measure} ${ingredient}`);
    }
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
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Header */}
        <h1 style={{
          color: '#e50914',
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '30px',
          fontWeight: 'bold',
          textShadow: '0 0 10px rgba(229, 9, 20, 0.5)',
          fontFamily:'cursive'
        }}>
          TODAY'S DONATED MEAL 😋🍽️
        </h1>
        
        {/* Meal Card */}
        <div style={{
          backgroundColor: '#181818',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.3s ease',
          marginBottom: '40px'
        }}>
          {/* Meal Image */}
          <div style={{
            position: 'relative',
            height: '400px',
            overflow: 'hidden'
          }}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
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
              height: '100px',
              background: 'linear-gradient(to top, rgba(20, 20, 20, 0.9), transparent)'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px'
            }}>
              <h2 style={{
                color: '#fff',
                fontSize: '2.2rem',
                margin: '0',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
              }}>
                {meal.strMeal}
              </h2>
              <div style={{
                display: 'flex',
                gap: '15px',
                marginTop: '10px'
              }}>
                <span style={{
                  backgroundColor: '#e50914',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  fontSize: '0.9rem'
                }}>
                  {meal.strCategory}
                </span>
                <span style={{
                  backgroundColor: '#333',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  fontSize: '0.9rem'
                }}>
                  {meal.strArea}
                </span>
              </div>
            </div>
          </div>
          
          {/* Meal Details */}
          <div style={{
            padding: '30px'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px'
            }}>
              {/* Ingredients */}
              <div style={{
                flex: '1',
                minWidth: '300px'
              }}>
                <h3 style={{
                  color: '#e50914',
                  fontSize: '1.5rem',
                  marginBottom: '20px',
                  borderBottom: '2px solidrgb(229, 9, 20)',
                  paddingBottom: '5px'
                }}>
                  Ingredients
                </h3>
                <ul style={{
                  listStyleType: 'none',
                  padding: '0',
                  margin: '0',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '10px'
                }}>
                  {ingredients.map((ingredient, index) => (
                    <li key={index} style={{
                      padding: '8px 12px',
                      backgroundColor: '#222',
                      borderRadius: '4px'
                    }}>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Instructions */}
              <div style={{
                flex: '2',
                minWidth: '300px'
              }}>
                <h3 style={{
                  color: '#e50914',
                  fontSize: '1.5rem',
                  marginBottom: '20px',
                  borderBottom: '2px solid #e50914',
                  paddingBottom: '5px'
                }}>
                  Instructions
                </h3>
                <div style={{
                  lineHeight: '1.6'
                }}>
                  {meal.strInstructions.split('\r\n\r\n').map((paragraph, index) => (
                    <p key={index} style={{
                      marginBottom: '15px'
                    }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            
            {/*  Buttons */}
            <div style={{
              display: 'flex',
              gap: '15px',
              marginTop: '30px',
              flexWrap: 'wrap'
            }}>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#e50914',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  fontFamily:'cursive'
                }}
              >
                Tutorial video for making next time
              </a>
              <a
                href={meal.strSource}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#333',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                Recipe idea 😊✨
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysMeal;