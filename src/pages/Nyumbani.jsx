import React from 'react';
import { Assests } from '../assets/Assests';

function Nyumbani() {
  return (
    <div className="m-auto ">
        <p className="text-xl flex flex-col items-center sm:flex-row">
          Hi there! 👋 I'm a coding enthusiast with a knack for turning caffeine into clean, efficient code (mostly).
        </p>
        <p className="text-lg ">
          Think of me as your friendly neighborhood developer who talks to computers better than humans{' '}
          (though I'm working on it!).
        </p>
        <p className="text-lg">
          When I'm not wrestling with bugs that think they're smarter than me, you can find me googling{' '}
          <b className="text-[#f778BA]">“how to center an image in CSS”</b> for the hundredth time{' '}
          <b className="text-gray-400">(because some things never stick)</b>, or obsessively tweaking my projects until my code editor threatens to quit.
        </p>
        <p className="text-lg">
          I thrive on challenges, love solving problems, and enjoy building cool stuff that makes life easier—or at least more fun. Whether it's nesting React routers like a pro or figuring out why a semicolon broke the world, I'm all in.
        </p>
        <p className="text-lg">
          Oh, and I'm always down for a chat about tech, engineering, or the eternal mystery of{' '}
          <code className="bg-gray-800 px-2 py-1 rounded-md text-sm text-[#0ea5e9]">*why developers hate CSS*</code>. Let's connect and build something awesome together! 🚀
        </p>
      </div>
  );
}

export default Nyumbani;
