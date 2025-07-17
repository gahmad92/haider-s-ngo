import React, { useEffect, useState } from "react";


function CatAdoption() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/cats/cat/random"
        );
        const data = await response.json();
        
        if (data.success) {
          setCat(data.data);
        } else {
          setError("Failed to fetch today's cat");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCat();
  }, []);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Finding today's purrfect match...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <h2 style={styles.errorText}>Meow-nificent Error!</h2>
        <p style={styles.errorMessage}>{error}</p>
        <button 
          style={styles.retryButton}
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  const renderRating = (level) => {
    return (
      <div style={styles.ratingContainer}>
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            style={i < level ? styles.ratingFilled : styles.ratingEmpty}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{cat.name} </h1>
        
        <div style={styles.badge}>TODAY'S ADOPTION</div>
      </div>

      <div style={styles.card}>
        <div style={styles.imageContainer}>
          <img
            src={cat.image}
            alt={cat.name}
            style={styles.image}
          />
          <div style={styles.imageOverlay}></div>
        </div>

        <div style={styles.details}>
          <h2 style={styles.subtitle}>Meet {cat.name}</h2>
          
          <div style={styles.grid}>
            <div style={styles.gridItem}>
              <h3 style={styles.label}>ORIGIN</h3>
              <p style={styles.text}>{cat.origin}</p>
            </div>
            
            <div style={styles.gridItem}>
              <h3 style={styles.label}>LIFESPAN</h3>
              <p style={styles.text}>{cat.life_span} years</p>
            </div>
            
            <div style={styles.gridItem}>
              <h3 style={styles.label}>SIZE</h3>
              <p style={styles.text}>{cat.weight.metric} kg</p>
            </div>
            
            <div style={styles.gridItem}>
              <h3 style={styles.label}>TYPE</h3>
              <p style={styles.text}>{cat.natural ? "Natural Breed" : "Developed Breed"}</p>
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.label}>PERSONALITY</h3>
            <div style={styles.tags}>
              {cat.temperament.split(', ').map((trait, i) => (
                <span key={i} style={styles.tag}>{trait}</span>
              ))}
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.label}>DESCRIPTION</h3>
            <p style={styles.text}>{cat.description}</p>
          </div>

          <div style={styles.traits}>
            <div style={styles.trait}>
              <span style={styles.traitLabel}>Affection:</span>
              {renderRating(cat.affection_level)}
            </div>
            <div style={styles.trait}>
              <span style={styles.traitLabel}>Energy:</span>
              {renderRating(cat.energy_level)}
            </div>
            <div style={styles.trait}>
              <span style={styles.traitLabel}>Child Friendly:</span>
              {renderRating(cat.child_friendly)}
            </div>
            <div style={styles.trait}>
              <span style={styles.traitLabel}>Dog Friendly:</span>
              {renderRating(cat.dog_friendly)}
            </div>
          </div>

          <div style={styles.buttons}>
            <a
              href={cat.wikipedia_url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.primaryButton}
            >
              Cats info 
            </a>
            <button style={styles.secondaryButton}>
              ADOPTION INQUIRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#141414',
    minHeight: '100vh',
    padding: '40px 20px',
    color: 'white'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    maxWidth: '1200px',
    margin: '0 auto 30px'
  },
  title: {
    color: '#e50914',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textShadow: '0 0 10px rgba(229, 9, 20, 0.5)',
    margin: 0
  },
  badge: {
    backgroundColor: '#e50914',
    padding: '8px 20px',
    borderRadius: '4px',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#181818',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  imageContainer: {
    position: 'relative',
    height: '400px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  imageOverlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    height: '100px',
    background: 'linear-gradient(to top, rgba(20, 20, 20, 0.9), transparent)'
  },
  details: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  subtitle: {
    color: '#fff',
    fontSize: '1.8rem',
    margin: '0 0 10px 0'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '15px'
  },
  gridItem: {
    backgroundColor: '#222',
    padding: '15px',
    borderRadius: '6px'
  },
  label: {
    color: '#e50914',
    fontSize: '1rem',
    margin: '0 0 8px 0'
  },
  text: {
    margin: '0',
    lineHeight: '1.5'
  },
  section: {
    marginBottom: '15px'
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  tag: {
    backgroundColor: '#333',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '0.9rem'
  },
  traits: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '15px',
    margin: '20px 0'
  },
  trait: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  traitLabel: {
    fontSize: '0.9rem',
    color: '#aaa'
  },
  ratingContainer: {
    display: 'flex',
    gap: '3px'
  },
  ratingFilled: {
    color: '#e50914'
  },
  ratingEmpty: {
    color: '#444'
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px'
  },
  primaryButton: {
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid #e50914',
    padding: '12px 24px',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#141414',
    gap: '20px'
  },
  spinner: {
    border: '5px solid #333',
    borderTop: '5px solid #e50914',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite'
  },
  loadingText: {
    color: '#e50914',
    fontSize: '1.2rem'
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#141414',
    gap: '20px',
    textAlign: 'center',
    padding: '20px'
  },
  errorText: {
    color: '#e50914',
    fontSize: '2rem',
    margin: 0
  },
  errorMessage: {
    color: '#aaa',
    fontSize: '1.1rem',
    maxWidth: '500px'
  },
  retryButton: {
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#f40612'
    }
  }
};

export default CatAdoption;