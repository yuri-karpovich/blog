# Deploy to Kubernetes (K8s)

## Preconditions

1. [[Docker#Image build]]
2. [[Docker Registry#Push image]]
3. Create [[HELM Chart]]
4. Make sure you can [[Connect to Kubernetes (k8s)]]

## Deploy HELM chart

```bash
helm upgrade --install --create-namespace --recreate-pods scope-manager sm/ -n feature1
```