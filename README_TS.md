# TypeScript

## npm install

```bash
npm i -D typescript ts-loader
```

## TS config

```json
// tsconfig.json
{
    "complilerOptions": {
        "target": "es5",
            "strict": true,
            "module": "es2015",
            "moduleResolution": "node"
    },
        "include": [
            "*.js", "*.ts"
        ],
        "exclude": ["node_modules"]
}
```
