python deploy.py;
ng build --base-href https://hardik-rajpal.github.io/ISID-EPU/;
bash -c 'mv dist/isid-epu/* .';
git add -A;
git commit -m "deployed.";
git push origin deploy --force;
git checkout master;