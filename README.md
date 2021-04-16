# react-suspense-vite-ssr
A playground to get React Suspense to play nice with SSR in ViteJS

I'm just trying to get SSR working in an app that uses React Suspense. It doesn't need to be amazing, just work for both client and server rendering. 

This solution is basically over writing the Suspense component to be a Fragment and pre-loading the lazy component only on the server side. Please lmk what you think of this, if it's dumb or a good avenue to go down.

Level Up Tutorials Discord

https://discord.gg/ccMC6kB

https://leveluptutorials.com/
