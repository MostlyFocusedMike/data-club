import * as marked from 'marked'

const lib = marked 
const markdown = "# Test \n ## testerino"

export const test = lib.parse(markdown);