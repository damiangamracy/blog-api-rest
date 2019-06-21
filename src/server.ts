import App from './app';

const { app } = new App();
const server = app.listen(app.get('port'), (): void => {
  // eslint-disable-next-line no-console
  console.log(
    'App running on port %d in %s mode',
    app.get('port'),
    app.get('env'),
  );
});

export default server;
