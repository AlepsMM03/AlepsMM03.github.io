from qiskit import QuantumCircuit, ClassicalRegister
from qiskit.primitives import Sampler # Import Sampler from qiskit.primitives
from qiskit_aer import Aer


def generate_entangled_state():
    qc = QuantumCircuit(2)
    qc.h(0)  # Aplicar Hadamard al primer qubit
    qc.cx(0, 1)  # Aplicar CNOT
    return qc

def measure_qubits(qc):
    qc.measure_all()  # Medir todos los qubits
    return qc

def extract_key(counts):
    return max(counts, key=counts.get)  # Clave más frecuente

# Generar el circuito
qc = generate_entangled_state()
qc = measure_qubits(qc)

# Usar un simulador para ejecutar el circuito
simulator = Aer.get_backend('statevector_simulator') 
# Remove the sampler
# sampler = Sampler() # Initialize the sampler
# Use simulator.run to execute the circuit
job = simulator.run(qc)
result = job.result()

# Obtener el vector de estado y los resultados de las mediciones
statevector = result.get_statevector()
counts = result.get_counts()

# Imprimir resultados
print("Estado Cuántico:", statevector)
print("Resultados de las mediciones:", counts)

# Extraer y mostrar la clave compartida
clave = extract_key(counts)
print("Clave compartida:", clave)