import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  House, Hash, Bell, EnvelopeSimple, BookmarkSimple, FileText, User,
  DotsThreeCircle
} from 'phosphor-react';

import './global.css';

import twitterLogo from './assets/logo-twitter.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img
          src={twitterLogo}
          alt="Logo"
          className="logo"
        />

        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill" />
            <span>
              Home
            </span>
          </a>
          <a href="">
            <Hash />
            <span>
              Explore
            </span>
          </a>
          <a href="">
            <Bell />
            <span>
              Notifications
            </span>
          </a>
          <a href="">
            <EnvelopeSimple />
            <span>
              Messages
            </span>
          </a>
          <a href="">
            <BookmarkSimple />
            <span>
              Bookmarks
            </span>
          </a>
          <a href="">
            <FileText />
            <span>
              Lists
            </span>
          </a>
          <a href="">
            <User />
            <span>
              Profile
            </span>
          </a>
          <a href="">
            <DotsThreeCircle />
            <span>
              More
            </span>
          </a>
        </nav>

        <button
          className="new-tweet"
          type="button"
        >
          Tweet
        </button>
      </aside>
      <div className="content">
        content
      </div>
    </div>
  </React.StrictMode>,
)
