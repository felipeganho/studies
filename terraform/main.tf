terraform {
  required_version = ">1.0.0"
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~>2.0"
    }
  }
}

provider "digitalocean" {
  token = ""
}

resource "digitalocean_droplet" "vm-ganho-tf" {
  image = "ubuntu-20-04-x64"
  name = "vm-ganho-tf"
  region = "nyc3"
  size = "s-1vcpu-1gb"
}