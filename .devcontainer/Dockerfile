FROM node:16.13.1-bullseye

# Install additional OS dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    procps \
    lsb-release

# [Optional] Install global npm packages
RUN npm install -g npm@8.1.2

# [Optional] Create a non-root user
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME



# Switch to non-root user
USER $USERNAME

WORKDIR /workspace