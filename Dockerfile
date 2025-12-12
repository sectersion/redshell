FROM node:latest
WORKDIR /app
COPY ./aluraOS .
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
RUN cd aluraOS
CMD pnpm start
