import React from 'react';
import './IOS_Articles.scss';
import { IOS_ARTICLES } from '../constants/inneros';

const IOS_Articles = () => {
  return (
    <section className="ios-articles-section">
      <div className="content-container">
        <h2>Transmissions & Insights</h2>
        <div className="articles-grid">
          {IOS_ARTICLES.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span className="article-platform">{article.platform}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <a href={article.link} target="_blank" rel="noreferrer" className="read-more">
                Read Full Post <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IOS_Articles;