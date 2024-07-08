# Use the latest foundry image
FROM ghcr.io/foundry-rs/foundry:latest

# Copy our source code into the container
WORKDIR /app

# Build and test the source code
##COPY . .
RUN forge build
RUN forge test
ENTRYPOINT ["anvil", "--host", "0.0.0.0","-b","3"]