const StarDecoration = () => {
  const stars = [
    { top: '10%', left: '5%', delay: '0s' },
    { top: '20%', right: '10%', delay: '1s' },
    { top: '40%', left: '8%', delay: '2s' },
    { top: '60%', right: '5%', delay: '0.5s' },
    { top: '80%', left: '12%', delay: '1.5s' },
    { top: '15%', left: '50%', delay: '2.5s' },
    { top: '70%', right: '15%', delay: '0.8s' },
    { top: '45%', right: '20%', delay: '1.8s' },
  ];

  return (
    <>
      {stars.map((star, index) => (
        <div
          key={index}
          className="star-decoration"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            animationDelay: star.delay,
          }}
        />
      ))}
    </>
  );
};

export default StarDecoration;
