# Additional clean files
cmake_minimum_required(VERSION 3.16)

if("${CONFIG}" STREQUAL "" OR "${CONFIG}" STREQUAL "Debug")
  file(REMOVE_RECURSE
  "CMakeFiles\\efficient_autogen.dir\\AutogenUsed.txt"
  "CMakeFiles\\efficient_autogen.dir\\ParseCache.txt"
  "efficient_autogen"
  )
endif()
