import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import './App.css';
import './App.scss';
import OpenAI from 'openai';
import getConfig from 'next/config';

export default function App({ Component, pageProps }: AppProps) {
  const [result, setResult] = useState(
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
  );
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [typedText, setTypedText] = useState('');
  const text = 'Creating image...Please wait...';

  const stars = [];
  for (let i = 0; i < 20; i++) {
    stars.push(<div className='shooting_star' key={i}></div>);
  }

  const { publicRuntimeConfig } = getConfig();

  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('apiKey is not defined in environment variables');
  }

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true, // This is also the default, can be omitted
  });

  // console.log('From Env: ', process.env.OPENAI_API_KEY);

  const generateImage = async () => {
    setLoading(true);
    const res = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: '512x512',
    });
    setLoading(false);
    const data = res.data;
    // console.log(data);
    setResult(data[0].url || 'no image found');
  };

  useEffect(() => {
    if (loading) {
      let i = 0;
      const typing = setInterval(() => {
        setTypedText(text.slice(0, i));
        i++;
        if (i > text.length + 1) {
          i = 0;
          setTypedText('');
        }
      }, 100);
      return () => clearInterval(typing);
    }
    // write some logic here
  }, [loading]);

  return (
    <div className='app-main'>
      {stars}
      <h2>Create Images With Your Mind</h2>
      <textarea
        className='app-input'
        placeholder='Create any type of image you can think of with as much added description as you would like'
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={generateImage}>Generate Image</button>

      <>
        {loading ? (
          <>
            <h3>{typedText}</h3>
            <div className='lds-ripple'>
              <div></div>
              <div></div>
            </div>
          </>
        ) : (
          <img src={result} className='result-image' alt='result' />
        )}
      </>
    </div>
  );
}
