# Personal site

```bash
# Make sure to login first
docker login registry.hendrywilliam.com
# Check commit SHA.
SHA="$(git rev-parse HEAD)"
docker build -t registry.hendrywilliam.com/hendrywilliam.com:$SHA .
docker push registry.hendrywilliam.com/hendrywilliam.com:$SHA
```
