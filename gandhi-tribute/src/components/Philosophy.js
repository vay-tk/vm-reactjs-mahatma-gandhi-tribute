import React from 'react';

function Philosophy() {
  return (
    <section id="philosophy" className="philosophy">
      <h2>Philosophy</h2>
      <div className="philosophy-grid">
        <div className="philosophy-item">
          <h3>Ahimsa (Non-violence)</h3>
          <p>Gandhi believed in non-violence as the means to achieve political and social goals.</p>
        </div>
        <div className="philosophy-item">
          <h3>Satyagraha (Truth-force)</h3>
          <p>This was his principle of nonviolent resistance to tyranny through mass civil disobedience.</p>
        </div>
        <div className="philosophy-item">
          <h3>Simple Living</h3>
          <p>Gandhi lived a life of simplicity, promoting self-sufficiency and local resources.</p>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
