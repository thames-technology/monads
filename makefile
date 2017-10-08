node_bin=./node_modules/.bin
dist_folder=./dist
src_folder=./src
jest_config_file=./jest.json
ts_config_file=./tsconfig.json
tsc_executable=${node_bin}/tsc
prettify_executable=${node_bin}/prettier
jest_executable=${node_bin}/jest

compile:
	rm -rf ${dist_folder}
	${tsc_executable} -p ${ts_config_file}

format:
	${prettify_executable} \
	--no-semi \
	--single-quote \
	--trailing-comma "all" \
	--write "${src_folder}/**/*.ts"

test:
	${jest_executable} \
	--config=${jest_config_file} \
	--coverage \
	--watch

test-ci:
	${jest_executable} \
	--bail \
	--ci \
	--config=${jest_config_file} \
	--coverage \
	--runInBand \
	--verbose
