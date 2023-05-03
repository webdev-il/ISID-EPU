bash -c 'rm -rf .angular node_modules/.cache dist'
git checkout deploy
git merge master
bash -c 'rm main.*.js polyfills.*.js runtime.*.js styles.*.css index.html'    
ng build --base-href https://hardik-rajpal.github.io/ISID-EPU/;
bash -c 'mv dist/isid-epu/* .';
git add -A;
$msg = bash -c "git log -2 --pretty=%B | sed -n '3 p'"
git commit -m "$msg";
git push origin deploy --force;
git checkout master;