IMAGE_NAME=jparkkennaby/react-examples
GIT_HASH := $(shell git rev-parse HEAD)


local/docker-build: ## Builds a docker image for local use - expects 'NPM_TOKEN' in the env
	docker build \
	 --platform linux/arm64 \
	 -t $(IMAGE_NAME):local \
	 .

local/docker-run: ## Runs local docker image
	docker run \
		-p 3000:3000 \
		-e API_URL="http://localhost:8080" \
		--platform linux/arm64 \
		$(IMAGE_NAME):local
