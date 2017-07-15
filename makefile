dist_folder=./dist
ts_compiler=./node_modules/typescript/bin/tsc
ts_config_file=./tsconfig.json
prettify_executable=./node_modules/prettier/bin/prettier.js
jest_executable=./node_modules/jest/bin/jest.js
jest_config_file=./jest.json

compile:
	rm -rf ${dist_folder}
	${ts_compiler} -p ${ts_config_file}

prettify:
	${prettify_executable} \
	--no-semi \
	--single-quote \
	--trailing-comma "all" \
	--write "./src/**/*.ts"

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
	--runInBand
