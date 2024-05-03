# CodeLabAPITemplate

API responsável por receber informações sobre a execução de testes automatizados realizados através de ferramentas como QF-Test. 
Ela permite que os usuários enviem dados de teste, incluindo resultados de teste, logs de teste, informações de erro e muito mais. 
Esta API é especialmente útil para integrar os resultados de seus testes automatizados em um local centralizado para análise e relatório

## Development Start

```bash
docker compose up --build
```

## Excecução de testes

- Atenção: "attach" ao container para executar os testes.
- Caso não queira o coverage, remova o cov

## Unit

```bash
npm run test:cov
```

## E2E

```bash
npm run test:e2e:cov
```
