import React from 'react';

function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <h2>Timeline of Key Events</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <h3>1869</h3>
          <p>Born in Porbandar, India, on October 2.</p>
        </div>
        <div className="timeline-item">
          <h3>1893</h3>
          <p>Gandhi first practices civil disobedience in South Africa against racial discrimination.</p>
        </div>
        <div className="timeline-item">
          <h3>1915</h3>
          <p>Returns to India and begins to organize the rural population for civil rights.</p>
        </div>
        <div className="timeline-item">
          <h3>1930</h3>
          <p>Leads the Salt March, a 240-mile march to protest British salt laws.</p>
        </div>
        <div className="timeline-item">
          <h3>1942</h3>
          <p>Launches the Quit India Movement, demanding an end to British rule.</p>
        </div>
        <div className="timeline-item">
          <h3>1947</h3>
          <p>India gains independence from British rule on August 15.</p>
        </div>
        <div className="timeline-item">
          <h3>1948</h3>
          <p>Assassinated on January 30 in New Delhi.</p>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
