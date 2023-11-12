import { globby } from 'globby';

const paths = await globby(['foo'], {
    ignoreFiles: ['!foo']
});
console.log(paths); // ['foo']
