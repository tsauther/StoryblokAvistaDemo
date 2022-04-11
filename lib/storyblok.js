import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'o8KfFSFj5QkGL6KISbETwQtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok