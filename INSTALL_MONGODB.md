# Installing MongoDB Locally

This guide walks you through installing MongoDB Community Edition on your local development machine. Choose the section that matches your operating system.

---

## Table of Contents

- [Windows](#windows)
- [macOS](#macos)
- [Linux](#linux)
- [Verifying the Installation](#verifying-the-installation)
- [Starting the MongoDB Server](#starting-the-mongodb-server)

---

## Windows

### Option A: Official Installer (Recommended)

1. Go to the [MongoDB Download Center](https://www.mongodb.com/try/download/community) and select:
   - **Version**: Latest stable release
   - **Platform**: Windows
   - **Package**: `msi`
2. Run the downloaded `.msi` installer.
3. Follow the setup wizard:
   - Choose **Complete** installation.
   - Leave the **Install MongoDB as a Service** checkbox enabled (starts MongoDB automatically on boot).
   - Optionally install **MongoDB Compass** (GUI client) when prompted.
4. The installer adds `mongod` to `C:\Program Files\MongoDB\Server\<version>\bin\`. Add this path to your `PATH` environment variable if it is not added automatically:
   - Open **Start → System → Advanced system settings → Environment Variables**.
   - Under **System variables**, select `Path` and click **Edit**.
   - Click **New** and paste the bin path, e.g. `C:\Program Files\MongoDB\Server\8.0\bin`.
   - Click **OK** on all dialogs to save.

### Option B: Command Line (winget)

Open **PowerShell** or **Command Prompt** as Administrator and run:

```powershell
winget install MongoDB.Server
```

After installation, reload your terminal so the updated `PATH` takes effect.

---

## macOS

### Option A: Homebrew (Recommended)

1. Install [Homebrew](https://brew.sh/) if you haven't already:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Add the MongoDB tap and install:
   ```bash
   brew tap mongodb/brew
   brew update
   brew install mongodb-community
   ```

### Option B: Official `.tgz` Archive

1. Go to the [MongoDB Download Center](https://www.mongodb.com/try/download/community) and select:
   - **Platform**: macOS
   - **Package**: `tgz`
2. Extract the archive and move the binaries to `/usr/local/bin`:
   ```bash
   tar -zxvf mongodb-macos-*.tgz
   sudo cp mongodb-macos-*/bin/* /usr/local/bin/
   ```
3. Create the default data directory:
   ```bash
   sudo mkdir -p /data/db
   sudo chown -R $(whoami) /data/db
   ```

---

## Linux

### Option A: apt (Debian / Ubuntu)

```bash
# Import the MongoDB public GPG key
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
  sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor

# Add the MongoDB repository (adjust the Ubuntu codename if needed)
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] \
  https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/8.0 multiverse" | \
  sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list

# Install
sudo apt-get update
sudo apt-get install -y mongodb-org
```

### Option B: dnf / yum (RHEL / Fedora / CentOS)

1. Create a repo file:
   ```bash
   sudo tee /etc/yum.repos.d/mongodb-org-8.0.repo <<'EOF'
   [mongodb-org-8.0]
   name=MongoDB Repository
   baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/8.0/x86_64/
   gpgcheck=1
   enabled=1
   gpgkey=https://www.mongodb.org/static/pgp/server-8.0.asc
   EOF
   ```
2. Install:
   ```bash
   sudo dnf install -y mongodb-org
   # or: sudo yum install -y mongodb-org
   ```

### Option C: Manual `.tgz` (any distro)

1. Download the tarball from the [MongoDB Download Center](https://www.mongodb.com/try/download/community) for your distro.
2. Extract and install:
   ```bash
   tar -zxvf mongodb-linux-x86_64-*.tgz
   sudo cp mongodb-linux-x86_64-*/bin/* /usr/local/bin/
   ```
3. Create the default data directory:
   ```bash
   sudo mkdir -p /data/db
   sudo chown -R $(whoami) /data/db
   ```

---

## Verifying the Installation

After installation, open a new terminal and confirm MongoDB is available:

```bash
mongod --version
```

You should see output similar to:

```
db version v8.0.x
Build Info: { ... }
```

---

## Starting the MongoDB Server

### Windows (as a Service)

If you used the MSI installer with the default options, MongoDB runs as a Windows service automatically. To control the service manually:

```powershell
# Start
net start MongoDB

# Stop
net stop MongoDB
```

Or use the **Services** panel (`services.msc`).

### macOS (Homebrew)

```bash
# Start (and enable auto-start on login)
brew services start mongodb/brew/mongodb-community

# Stop
brew services stop mongodb/brew/mongodb-community

# Start once (foreground, without auto-start)
mongod --config /usr/local/etc/mongod.conf
```

### Linux (systemd)

```bash
# Start
sudo systemctl start mongod

# Enable auto-start on boot
sudo systemctl enable mongod

# Check status
sudo systemctl status mongod

# Stop
sudo systemctl stop mongod
```

### Manual start (all platforms)

If you prefer to start `mongod` directly (e.g., from a tarball installation):

```bash
mongod --dbpath /data/db
```

---

## Connecting with the MongoDB Shell

Once `mongod` is running, open a second terminal and connect:

```bash
mongosh
```

You should see the `mongosh` prompt. Type `exit` to quit.

---

## Further Reading

- [MongoDB Documentation](https://www.mongodb.com/docs/manual/)
- [MongoDB Compass (GUI)](https://www.mongodb.com/products/tools/compass)
- [mongosh Reference](https://www.mongodb.com/docs/mongodb-shell/)
