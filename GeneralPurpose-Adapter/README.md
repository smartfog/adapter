# General Purpose Adapter

## Introduction
A General Purpose Adapter has been developed to integrate FIWARE entities into FogFlow. 

It acts as a proxy between IoT Agents and FogFlow. This means that it is compatible with any type of IoT Agent (MQTT, LwM2M, etc), translating the IoT Agent Nortbound Traffic operations into a FogFlow expected requests.

## Usage
In this repository 2 folders are provided with docker-compose files and configuration files for testing.

Just do:
> move to the **edge-deployment** folder, edit **broker-config.json** and **config.js** files with the properly IPs/Ports values and execute `docker-compose up`.

> execute `docker-compose up` in the **virtual-device** folder.

For a more complete guide or access to the source code of this project the [next link](https://gitlab.hopu.eu/public-projects/Py-IoTAgent-Adapter) is provided.

## Support

### Maintainers
>eleazar@hopu.eu

>felipe@hopu.eu

>german@hopu.eu

To any technical issue, write your incidence in our issue tracker that you can find in the following link: [click me!](https://gitlab.hopu.eu/public-projects/Py-IoTAgent-Adapter/issues)

## License & Terms and Conditions
Copyright 2019 Hop Ubiquitous

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the [LICENSE](https://gitlab.hopu.eu/public-projects/Py-IoTAgent-Adapter/blob/master/LICENSE) for the specific language governing permissions and
limitations under the License.
