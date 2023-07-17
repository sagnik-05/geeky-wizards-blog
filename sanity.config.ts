/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\studio\[[...index]].tsx` route
 */

import {visionTool} from '@sanity/vision'
import {StudioNavbar, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import Logo from './components/Logo'
// import StudioNavbar from './components/StudioNavbar'

// const projectId="31ay3kqj"
// const dataset ="production"

import { buildLegacyTheme } from "sanity";
const props  = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--my-red" :"#db4437",
    "--my-wizard" : "#29bdf2",
    "--my-yellow" : "#f4b400",
    "--my-green" : "#0f9d58"
};

export const myTheme = buildLegacyTheme({
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",
    "--component-bg": props["--my-black"],
    "--component-text-color": props ["--my-white"],
    // Brand 
    "--brand-primary": props["--my-wizard"],
    // Default button
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--my-wizard"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--default-button-danger-color": props ["--my-red"],
    //State 
    "--state-info-color": props["--my-wizard"],
    "--state-success-color": props ["--my-green"],
    "--state-warning-color": props ["--my-yellow"],
    "--state-danger-color": props ["--my-red"],
    // Navbar 
    "--main-navigation-color": props ["--my-black"],
    "--main-navigation-color--inverted": props ["--my-white"],
    "--focus-color": props ["--my-wizard"],

})
export default defineConfig({
  basePath: '/studio',
  name: "Wizard_Studio",
  title: "Wizard Studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  studio:{
    components: {
      //logo : Logo,
      navbar : StudioNavbar
    }

  },
  theme: myTheme,
})
