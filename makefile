node_bin=./node_modules/.bin
dist_folder=./dist
src_folder=./src
jest_config_file=./jest.json
ts_config_file=./tsconfig.json
tslint_config_file=./tslint.json
jest_executable=${node_bin}/jest
prettier_executable=${node_bin}/prettier
tsc_executable=${node_bin}/tsc
tslint_executable=${node_bin}/tslint

compile: format
	rm -rf ${dist_folder}
	${tsc_executable} -p ${ts_config_file}

format:
	${prettier_executable} \
	--write "${src_folder}/**/*.ts"

check-format:
	${prettier_executable} \
	--list-different "${src_folder}/**/*.ts"

lint:
	${tslint_executable} \
	-c ${tslint_config_file} \
	--fix \
	"${src_folder}/**/*.ts"

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
	--silent \
	--verbose
