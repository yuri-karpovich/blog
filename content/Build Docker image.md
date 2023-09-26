# Build Docker image

```bash
docker build --platform linux/amd64 -t some-registry.com/app-name:tag .
```

> To build `x86` images on `arm` processors, use the `--platform linux/amd64` flag.
