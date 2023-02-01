def __build_nest(service_name, port_forwards=[]):
    k8s_yaml(".k8s/" + service_name + ".yaml")
    k8s_resource(service_name, port_forwards=port_forwards, labels=["backend"])

    docker_build(
        service_name + "-image",
        dockerfile="Dockerfile.nest-app",
        context=".",
        build_args={"node_env": "development", "service_name": service_name},
        only=[
            "./nx.json",
            "./package.json",
            "./tsconfig.base.json",
            "./yarn.lock",
            "./libs",
            "./apps/backend/" + service_name + "/src",
            "./apps/backend/" + service_name + "/project.json",
            "./apps/backend/" + service_name + "/tsconfig.app.json",
            "./apps/backend/" + service_name + "/tsconfig.json",
            "./apps/backend/" + service_name + "/webpack.config.js",
        ],
    )


def __build_next(service_name, port_forwards=[]):
    k8s_yaml(".k8s/" + service_name + ".yaml")
    k8s_resource(service_name, port_forwards=port_forwards, labels=["frontend"])

    docker_build(
        service_name + "-image",
        dockerfile="Dockerfile.next-app",
        context=".",
        build_args={"node_env": "development", "service_name": service_name},
        only=[
            "./nx.json",
            "./package.json",
            "./tsconfig.base.json",
            "./babel.config.json",
            "./yarn.lock",
            "./libs",
            "./apps/frontend/" + service_name + "/pages",
            "./apps/frontend/" + service_name + "/public",
            "./apps/frontend/" + service_name + "/project.json",
            "./apps/frontend/" + service_name + "/tsconfig.json",
            "./apps/frontend/" + service_name + "/next.config.js",
        ],
    )


def init():
    docker_prune_settings(disable=False, num_builds=3, keep_recent=2)

    # backend
    __build_nest("ledger", "3001:3001")
    __build_nest("portal-gateway", "4001:3001")

    # frontend
    __build_next("another-web", "5001:3001")
    __build_next("portal-web", "6001:3001")
