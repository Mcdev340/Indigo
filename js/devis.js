// ============================
// Formulaire de devis
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const devisForm = document.getElementById('devis-form');
    const confirmation = document.getElementById('devis-confirmation');
    const formWrapper = document.querySelector('.devis-form-wrapper');
    
    if (devisForm) {
        devisForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données
            const formData = {
                nom: document.getElementById('nom').value,
                email: document.getElementById('email').value,
                telephone: document.getElementById('telephone').value,
                typeProjet: document.getElementById('type-projet').value,
                budget: document.getElementById('budget').value,
                description: document.getElementById('description').value,
                fichier: document.getElementById('fichier').files[0] || null
            };
            
            // Validation simple
            if (!formData.nom || !formData.email || !formData.telephone || !formData.typeProjet || !formData.description) {
                alert('Veuillez remplir tous les champs obligatoires (*).');
                return;
            }
            
            // Simulation d'envoi (remplacer par EmailJS ou API réelle)
            console.log('Demande de devis envoyée :', formData);
            
            // Afficher le message de confirmation
            if (formWrapper && confirmation) {
                formWrapper.style.display = 'none';
                confirmation.style.display = 'block';
                
                // Scroll vers la confirmation
                confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            // Réinitialiser le formulaire
            devisForm.reset();
        });
    }
    
    // ============================
    // Formulaire de contact
    // ============================
    const contactForm = document.getElementById('contact-form');
    const contactConfirmation = document.getElementById('contact-confirmation');
    const contactFormWrapper = document.querySelector('.contact-form-wrapper');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                nom: document.getElementById('contact-nom').value,
                email: document.getElementById('contact-email').value,
                sujet: document.getElementById('contact-sujet').value,
                message: document.getElementById('contact-message').value
            };
            
            if (!formData.nom || !formData.email || !formData.message) {
                alert('Veuillez remplir tous les champs obligatoires (*).');
                return;
            }
            
            console.log('Message de contact envoyé :', formData);
            
            if (contactFormWrapper && contactConfirmation) {
                contactFormWrapper.style.display = 'none';
                contactConfirmation.style.display = 'block';
                contactConfirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            contactForm.reset();
        });
    }
});