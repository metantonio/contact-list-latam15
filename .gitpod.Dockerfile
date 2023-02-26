SHELL ["/bin/bash", "-c"]

RUN sudo apt-get update \
    && sudo apt-get update \
    && sudo apt-get install -y redis-server \
    && sudo apt-get clean \
    && sudo rm -rf /var/cache/apt/* /var/lib/apt/lists/* /tmp/*

# That Gitpod install pyenv for me? no, thanks
WORKDIR /home/gitpod/
RUN rm .pyenv -Rf
RUN rm .gp_pyenv.d -Rf
RUN curl https://pyenv.run | bash

# remove PIP_USER environment
USER gitpod