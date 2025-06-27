# ☁️ Cloud Hosting & Monitoring App with Prometheus + Grafana

This project showcases the deployment of a simple Node.js web app on AWS EC2 (Ubuntu) with system-level monitoring using Prometheus, Node Exporter, and Grafana. The stack is cloud-native, lightweight, and designed to demonstrate core DevOps concepts such as deployment, metrics collection, and visualization.

------------------------------------------------------------------------------------------------------

## 🚀 Features

- Cloud-hosted Node.js app deployed on AWS EC2
- Prometheus for system & exporter metrics collection
- Node Exporter to gather Linux server statistics
- Grafana dashboards for real-time visualization
- Nginx (optional) for proxying traffic
- Complete project structure with configuration files
- Ready-to-import Grafana dashboard JSON

------------------------------------------------------------------------------------------------------

## 🧰 Tech Stack

| Tool         | Role/Use                             |
|--------------|----------------------------------------|
| Node.js      | Lightweight web server                |
| AWS EC2      | Cloud hosting (Ubuntu 22.04 LTS)      |
| Prometheus   | Metrics scraper + time-series DB      |
| Node Exporter| Exposes system metrics to Prometheus  |
| Grafana      | Dashboard and visualization tool      |
| Nginx (opt)  | Reverse proxy for Node.js app         |

------------------------------------------------------------------------------------------------------

## 📂 Project Structure

cloud-hosting-monitoring-app/
├── app/
│ ├── index.js # Node.js app
│ └── package.json
├── prometheus/
│ └── prometheus.yml # Prometheus configuration
├── grafana/
│ └── node-exporter-dashboard.json # Grafana dashboard export (ID: 1860)
├── screenshots/
│ └── grafana-preview.png # Optional screenshots
| └── Prometheus.png
|  └── Prometheus_status.png
└── README.md


------------------------------------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 🖥️ 1. Launch EC2 Instance

- Launch a **t2.micro Ubuntu EC2**
- Open Inbound Ports: `22`, `80`, `3000`, `9090`, `9100`
- SSH into it:
  ```bash
  ssh -i your-key.pem ubuntu@<your-ec2-ip>

------------------------------------------------------------------------------------------------------

📦 2. Deploy the Node.js App
bash
Copy
Edit
sudo apt update
sudo apt install nodejs npm -y
git clone https://github.com/<your-username>/cloud-hosting-monitoring-app.git
cd cloud-hosting-monitoring-app/app
npm install
sudo fuser -k 80/tcp
sudo node index.js &
✅ App should be accessible at:
http://<your-ec2-ip>

------------------------------------------------------------------------------------------------------

📈 3. Setup Prometheus
cd ~
wget https://github.com/prometheus/prometheus/releases/download/v2.52.0/prometheus-2.52.0.linux-amd64.tar.gz
tar xvf prometheus-2.52.0.linux-amd64.tar.gz
cd prometheus-2.52.0.linux-amd64
Paste config into prometheus.yml or copy it from prometheus/ in your repo:

yaml
Copy
Edit
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node_exporter'
    static_configs:
      - targets: ['localhost:9100']


Start Prometheus:
./prometheus --config.file=prometheus.yml &

✅ Access Prometheus at:
http://<your-ec2-ip>:9090

------------------------------------------------------------------------------------------------------

📊 4. Install Node Exporter
cd ~
wget https://github.com/prometheus/node_exporter/releases/download/v1.8.1/node_exporter-1.8.1.linux-amd64.tar.gz
tar xvf node_exporter-*.tar.gz
cd node_exporter-*
./node_exporter &

✅ Access Node Exporter metrics at:
http://<your-ec2-ip>:9100/metrics

------------------------------------------------------------------------------------------------------

📉 5. Install Grafana
sudo apt install -y software-properties-common
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
sudo apt update
sudo apt install grafana -y
sudo systemctl start grafana-server

✅ Access Grafana at:
http://<your-ec2-ip>:3000
 Login: admin / admin
 Set a new password when prompted

------------------------------------------------------------------------------------------------------

📊 6. Import Dashboard in Grafana

In Grafana → Click “+” → Import

Paste Dashboard ID: 1860

Choose Prometheus as the data source
Or upload grafana/node-exporter-dashboard.json directly

------------------------------------------------------------------------------------------------------



✅ Let me know if you'd like:
- GitHub badge support
- A markdown-friendly dashboard screenshot
- A ZIP bundle of the full project

------------------------------------------------------------------------------------------------------
