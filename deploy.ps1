    
ng build --base-href https://hardik-rajpal.github.io/ISID-EPU/;
bash -c 'mv dist/isid-epu/* .';
git add -A;
$dt = Get-Date
git commit -m "$dt";
git push origin deploy --force;
# git checkout master;