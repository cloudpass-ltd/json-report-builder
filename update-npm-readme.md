# Update NPM Instructions

1. Make code changes
2. Update `package.json` version
3. Push to git
4. Create a git tag
```bash
git tag -a v0.1.0 -m "Version 0.1.0"
```
5. Publish to NPM
```bash
npm run publish-please
```
