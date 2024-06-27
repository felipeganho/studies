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
  name = var.droplet_name #name = "vm-ganho-tf"
  region = var.region #region = "nyc3"
  size = var.droplet_setup #size = "s-1vcpu-1gb"
  ssh_keys = [data.digitalocean_ssh_key.ssh_local.id]
}

data "digitalocean_ssh_key" "ssh_local" {
  name = "ganho-tf"
}

variable "token" {}

variable "droplet_name" {}

variable "region" {}

variable "droplet_setup" {}