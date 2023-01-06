.PHONY: help
.DEFAULT_GOAL := help

USER_ID = $(shell id -u)
GROUP_ID = $(shell id -g)
export UID = $(USER_ID)
export GID = $(GROUP_ID)

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

version-major: ## Create a major version for a directory, e.g. make version-major mapping-tools
	@./bin/version-major.sh "$(filter-out $@,$(MAKECMDGOALS))"

version-minor: ## Create a minor version for a directory, e.g. make version-minor mapping-tools
	@./bin/version-minor.sh "$(filter-out $@,$(MAKECMDGOALS))"

version-patch: ## Create a patch version for a directory, e.g. make version-patch mapping-tools
	@./bin/version-patch.sh "$(filter-out $@,$(MAKECMDGOALS))"

# Remove error message about lacking rules for targets' parameters
%:
	@:
